import { TableCell, TableHead, TableRow } from "@mui/material";
import Header from "../../components/Header";
import EnhancedTable from "../../components/Table";

function Admin() {
    const data = require("../../db.json");
    console.log(data);

    return (
        <div className="app">
            <Header />
            <h1> admin</h1>
            
            <h1> Jogadores</h1>
            <p>{data.jogadores[0].nome}</p>
            <EnhancedTable />
        </div>
    )
}

export default Admin;