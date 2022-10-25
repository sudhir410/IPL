import './teamvsteam.css'
import { useNavigate } from 'react-router-dom'
import IPLDATA from "../data/ipldata.json"
import { useState } from 'react'

function TeamvsTeam() {
    // const [data, setData] = useState(IPLDATA)
    const [searchValue, setSearchValue] = useState({ team1: "Sunrisers Hyderabad", team2: "Sunrisers Hyderabad" })
    let arr = []
    for (let i = 0; i < IPLDATA.length; i++) {
        IPLDATA.map((data) => arr.push(data.team1))
    }
    let teams = [...new Set(arr)]


    const navigate = useNavigate()
    return (
        <>
            <div className='teamscontainer-1'>
                <h1 className='headingtag'>Welcome to Team vs Team Analysis Page!!!</h1>
                <div className='buttonstag'>
                    <select id="team" value={searchValue.team1} name='team1' onChange={(e) => { setSearchValue({ ...searchValue, [e.target.name]: e.target.value }) }}>
                        {
                            teams.map((value) => {
                                return (
                                    <option >{value}</option>
                                )
                            })
                        }
                    </select>
                    <select id="team" value={searchValue.team2} name='team2' onChange={(e) => { setSearchValue({ ...searchValue, [e.target.name]: e.target.value }) }}>
                        {
                            teams.map((value) => {
                                return (
                                    <option>{value}</option>
                                )
                            })
                        }
                    </select>

                    <button className='back' onClick={() => navigate('/')}>BACK</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Season</th>
                            <th scope="col">City</th>
                            <th scope="col">Date</th>
                            <th scope="col">Team1</th>
                            <th scope="col">Team2</th>
                            <th scope="col">Toss Winner</th>
                            <th scope="col">Toss Decision</th>
                            <th scope="col">Result</th>
                            <th scope="col">Winner</th>
                            <th scope="col">Wins By Runs</th>
                            <th scope="col">Win_by_wickets</th>
                            <th scope="col">Player_of_match</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Umpire1</th>
                            <th scope="col">Umpire2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            IPLDATA.filter((val) => {
                                if (val.team1.includes(searchValue.team1) && val.team2.includes(searchValue.team2)) {
                                    return val;
                                }
                            }).map((data) => {

                                return <tr>
                                    <th scope="row">{data.season}</th>
                                    <td>{data.city}</td>
                                    <td>{data.date}</td>
                                    <td>{data.team1}</td>
                                    <th scope="row">{data.team2}</th>
                                    <td>{data.toss_winner}</td>
                                    <td>{data.toss_decision}</td>
                                    <td>{data.result}</td>
                                    <th scope="row">{data.winner}</th>
                                    <td>{data.win_by_runs}</td>
                                    <td>{data.win_by_wickets}</td>
                                    <td>{data.player_of_match}</td>
                                    <th scope="row">{data.venue}</th>
                                    <td>{data.umpire1}</td>
                                    <td>{data.umpire2}</td>

                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </>
    )

}
export default TeamvsTeam