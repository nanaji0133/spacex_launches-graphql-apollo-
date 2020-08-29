import gql from "graphql-tag";
import React from 'react';
import { Query } from "react-apollo";


const Launches = () =>
{
    return (
        <div>
            <h1>Launches</h1>
            <Query query={ LAUNCHES_QUERY }>
                {
                    ({ loading, error, data }) => 
                        loading ? <h4>loading...</h4> : error ? console.log(error) : <p>testing</p> 
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

