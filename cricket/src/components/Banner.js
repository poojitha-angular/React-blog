import './css/banner.css'
function Banner(){
    let players=[
        {
            playername:"Virat Kohli",
            team:"RCB",
            runs:900
        },
        {
            playername:"Dhoni",
            team:"CSK",
            runs:1000
        },
        {
            playername:"Dhinesh Karthik",
            team:"KKR",
            runs:500
        },
        {
            playername:"Aswin",
            team:"PBKS",
            runs:700

        },
        {
            playername:"KL Rahul",
            team:"PBKS",
            runs:800
        },{
            playername:"Warner",
            team:"SRH",
            runs:1200
        },
        {
            playername:"Kane",
            team:"SRH",
            runs:100
        }
    ]
    
    players.sort((a,b)=>{
         return b.runs - a.runs; 
        }
        );
    return (
        <div class="content-ctn">
            <table>
                <tr class="table-heading">
                    <th>PlayerName</th>
                    <th>Team</th>
                    <th>Runs</th>
                </tr>
                <tr>
                    <td>{players[0].playername}</td>
                    <td>{players[0].team}</td>
                    <td>{players[0].runs}</td>
                </tr>
                <tr>
                    <td>{players[1].playername}</td>
                    <td>{players[1].team}</td>
                    <td>{players[1].runs}</td>   
                </tr>
                <tr>
                    <td>{players[2].playername}</td>
                    <td>{players[2].team}</td>
                    <td>{players[2].runs}</td>   
                </tr>
                <tr>
                    <td>{players[3].playername}</td>
                    <td>{players[3].team}</td>
                    <td>{players[3].runs}</td>   
                </tr>
                <tr>
                    <td>{players[4].playername}</td>
                    <td>{players[4].team}</td>
                    <td>{players[4].runs}</td>   
                </tr>
                <tr>
                    <td>{players[5].playername}</td>
                    <td>{players[5].team}</td>
                    <td>{players[5].runs}</td>   
                </tr>
                <tr>
                    <td>{players[6].playername}</td>
                    <td>{players[6].team}</td>
                    <td>{players[6].runs}</td>   
                </tr>
            </table>
        </div>

    )
}export default Banner;