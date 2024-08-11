import React from "react";
import ReactFlow, { Controls, Background, Node, Edge } from "react-flow-renderer";
import { useGetCharacterDetailsQuery } from "./model";

export const CharacterDetails: React.FC<{ id: string }> = ({ id }) => {
    const { data, error, isLoading } = useGetCharacterDetailsQuery(id);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {"message" in error ? error.message : "Unknown error"}</div>;

    const nodes: Node[] = createNodes(data);
    const edges: Edge[] = createEdges(data);

    return (
        <div style={{ position: "relative", width: "100%", height: "80vh", backgroundColor: "lightgray" }}>
            <div style={{
                position: "relative",
                width: "100%",
                height: "50px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "flex-start",
                gap: "20px",
                alignItems: "center",
            }}>
                <h3>{data?.name}</h3>
                <p>Height: {data?.height}</p>
                <p>Mass: {data?.mass}</p>
            </div>
            <ReactFlow nodes={nodes} edges={edges} style={{ width: "100%", height: "80vh" }}>
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
};

const createNodes = (data: any): Node[] => {
    if (!data) return [];

    const hasFilms = data.films && data.films.length > 0;
    const hasStarships = data.starships && data.starships.length > 0;

    return [
        { id: "hero", data: { label: data.name }, position: { x: 250, y: 0 } },
        ...(hasFilms ? data.films.map((film: any, index: number) => ({
            id: `film-${index}`,
            data: { label: `Film ${index + 1}: ${film.title}` },
            position: { x: 150 * (index + 1), y: 100 },
        })) : [{ id: "no-films", data: { label: "No Films Available" }, position: { x: 250, y: 150 } }]),
        ...(hasStarships ? data.starships.map((starship: any, index: number) => ({
            id: `starship-${index}`,
            data: { label: `Starship ${index + 1}: ${starship.name}` },
            position: { x: 150 * (index + 1), y: 250 },
        })) : [{ id: "no-starships", data: { label: "No Starships Available" }, position: { x: 250, y: 300 } }]),
    ];
};

const createEdges = (data: any): Edge[] => {
    if (!data) return [];

    const hasFilms = data.films && data.films.length > 0;
    const hasStarships = data.starships && data.starships.length > 0;

    return [
        ...(hasFilms ? data.films.map((_: any, index: number) => ({
            id: `e-hero-film-${index}`,
            source: "hero",
            target: `film-${index}`,
            sourcePosition: "bottom",
            targetPosition: "top",
        })) : []),
        ...(hasStarships ? data.starships.map((_: any, index: number) => ({
            id: `e-hero-starship-${index}`,
            source: "hero",
            target: `starship-${index}`,
            sourcePosition: "bottom",
            targetPosition: "top",
        })) : []),
    ];
};
