import axios from "axios";
import React, { useEffect, useState } from "react";
import { useIsOnline } from "./hooks/Datafetch";

// function App() {
//   const [data, loading] = useTodos(3);
//   const live = useIsOnline();

//   return (
//     <div>
//       {loading ? (
//         <h1>loading...</h1>
//       ) : (
//         <>
//           {" "}
//           {data.map((todo, idx) => (
//             <Todos todo={todo} key={idx} />
//           ))}
//         </>
//       )}
//     </div>
//   );
// }

function App() {
  const live = useIsOnline();

  console.log(live);

  return (
    <>
      <h1>{live ? "player is online" : "player is offline"}</h1>
    </>
  );
}
// const Todos = ({ todo }) => {
//   return (
//     <>
//       <h1>{todo.title}</h1>
//     </>
//   );
// };
export default App;
