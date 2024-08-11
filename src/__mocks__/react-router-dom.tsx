// @ts-ignore
const mockNavigate = jest.fn();

const MockRouter = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
);

const useParams = jest.fn().mockReturnValue({});
const useLocation = jest.fn().mockReturnValue({ pathname: '/' });
const useNavigate = () => mockNavigate;

module.exports = {
    ...jest.requireActual('react-router-dom'),
    BrowserRouter: MockRouter,
    MemoryRouter: MockRouter,
    Routes: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    Route: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    useParams,
    useLocation,
    useNavigate,
};
