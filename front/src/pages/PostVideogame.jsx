import { createVideogame } from "../../api/videogameFetch";
import PostVideogameComponent from "@/components/PostVideogameComponent";
import { useRouter } from "next/navigation";

export default function PostVideogame() {
  const router = useRouter();

  const handlePost = async (videogame) => {
    try {
      const newVideogame = await createVideogame(videogame);
      console.log("Videogame created successfully:", newVideogame);
      router.push("/");
    } catch (error) {
      console.error("Error creating videogame:", error);
    }
  };

  return (
    <div>
      <PostVideogameComponent onPost={handlePost} />
    </div>
  );
}
