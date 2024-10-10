import GamePage from "./pages/GamePage";
import Layout from "./components/Layout";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true, element: <GamePage />,
            }
        ]
    }
]
export default routes;