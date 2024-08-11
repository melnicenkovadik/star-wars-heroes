import React from "react";
import {useNavigate} from "react-router-dom";
import {Character} from "../../entities/character";

type CharacterCardProps = Pick<Character, "id" | "name" | "height" | "mass" | "hair_color" | "skin_color" | "eye_color" | "birth_year" | "gender">;

interface Props {
    character: CharacterCardProps;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
    const navigate = useNavigate();

    const handleCardClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        navigate(`/character/${character.id}`);
    };

    return (
        <a
            href={`/character/${character.id}`}
            className="character-card"
            style={styles.card}
            onClick={handleCardClick}
        >
            <img
                src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
                alt={character.name}
                style={styles.image}
            />
            <h3>{character.name}</h3>
            <p><strong>Height:</strong> {character.height}</p>
            <p><strong>Mass:</strong> {character.mass}</p>
            <p><strong>Hair Color:</strong> {character.hair_color}</p>
            <p><strong>Skin Color:</strong> {character.skin_color}</p>
            <p><strong>Eye Color:</strong> {character.eye_color}</p>
            <p><strong>Birth Year:</strong> {character.birth_year}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
        </a>
    );
};

const styles = {
    card: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center" as const,
        backgroundColor: "#f9f9f9",
        marginBottom: "16px",
        maxWidth: "300px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        textDecoration: "none",
    },
    image: {
        width: "100%",
        maxWidth: "300px",
        height: "auto",
        borderRadius: "8px",
        marginBottom: "12px",
    },
};

export default CharacterCard;
