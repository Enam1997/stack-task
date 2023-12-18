import React from "react";
import NavBar from "../../layout/navbar/NavBar";
import { useGetUsersQuery } from "../../feature/users-slice/usersSlice";

const Projects = () => {
  const { data, error, isLoading } = useGetUsersQuery(2);
  console.log(data);
  return (
    <div>
      <NavBar />
      Projects
    </div>
  );
};

export default Projects;
