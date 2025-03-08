import Image from "next/image";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import StudentCourse from "./components/StudentCourse";
import Learn from "./components/Learn";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <StudentCourse />
      <Learn />
    </main>
  );
}
