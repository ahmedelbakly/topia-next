import HomePage from "../components/home/Home";
export const metadata = {
  title: 'Home Page',
  description: 'home page for blog app',
}
export default async function Home() {
  // const res = await fetch('http://localhost:3000/api/blog',{cache:'no-store'});
  // const data = await res.json()
  
  return (
    <main className="bg-green-100 pt-5">
      <h1 className="text-6xl text-orange-500 text-center  mb-8">
        Hello ahmed from full stack Next.js
      </h1>
        <HomePage/>
    </main>
  );
}
