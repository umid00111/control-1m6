import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function Users() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],

    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Ошибка загрузки пользователей");
      }

      return response.json();
    },
  });

  if (isLoading) {
    return <h2>Загрузка...</h2>;
  }

  if (isError) {
    return <h2>Ошибка загрузки пользователей!</h2>;
  }

  return (
    <div className="container">
      <h1>Список пользователей</h1>

      <div className="users-list">
        {data.map((user) => (
          <Link
            to={`/user/${user.id}`}
            className="user-card"
            key={user.id}
          >
            {user.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Users;