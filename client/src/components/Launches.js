import gql from "graphql-tag";
import React from 'react';
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";


const Launches = () =>
{
    return (
        <div>
            <h1 className="display-4 my-3">Launches</h1>
            <Query query={ LAUNCHES_QUERY }>
                {
                    ({ loading, error, data }) =>
                        
                        {
                            if (loading) { return <h4>Loading...</h4>; }
                            if (error) {return console.log(error)}
                            console.log(data)

                            return (
                                <div>{
                                data.launches.map(launch => 
                                    <div key={launch.flight_number}> 
                                        <LaunchItem launch={launch} /> 
                                    </div>
                                )
                            }
                            </div>
                            )
                        }
                }
            </Query>
        </div>
    );
};

export default Launches;

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches{
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

