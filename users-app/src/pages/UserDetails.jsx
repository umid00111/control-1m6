import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function UserDetails() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["user", id],

    queryFn: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      if (!response.ok) {
        throw new Error("Ошибка загрузки пользователя");
      }

      return response.json();
    },
  });

  if (isLoading) {
    return <h2>Загрузка...</h2>;
  }

  if (isError || !data.id) {
    return <h2>Пользователь не найден!</h2>;
  }

  return (
    <div className="container">
      <div className="user-details">
        <h1>Информация о пользователе</h1>

        <h2>Имя: {data.name}</h2>

        <p>Email: {data.email}</p>

        <p>Город: {data.address.city}</p>

        <Link to="/users" className="back-button">
          Назад к пользователям
        </Link>
      </div>
    </div>
  );
}

export default UserDetails;