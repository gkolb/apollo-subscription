import {useSubscription, gql, useQuery } from '@apollo/client';


const TIME_SUBSCRIPTION = gql`
  subscription {
    currentTime {
      unixTime
      timeStamp
    }
  }
`;

const HELLO_WORLD_QUERY = gql`
  query {
    placeholder
  }
`

const LatestTime = () => {
  const { data, loading } = useSubscription(
    TIME_SUBSCRIPTION
  );
  if (loading) return <h2>Loading...</h2>
  return <h4>New time obj: {JSON.stringify(data)}</h4>;
}

const HelloWorld = () => {
  const { data, loading } = useQuery(
    HELLO_WORLD_QUERY
  );
  if (loading) return <h2>Loading...</h2>
  return <h4>Hello World Query: {JSON.stringify(data)}</h4>;
}


export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <HelloWorld/>
      <LatestTime/>
    </div>
  );
}