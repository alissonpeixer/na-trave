import { Header } from "../src/components/Header";

function App() {
  return (
    <main className="h-screen bg-red1">
      <Header color={"bg-red1"} />

      <div className="container  mx-auto">
        
        <section className="transition-all  flex h-screen items-center   flex-col pt-10  xl:flex-row xl:pt-0">

          <div className="px-6">
            <img
              src="/img.png"
              alt="peoples"
              className="transition-all min-w-[100px] w-[450px] max-w-[700px] xl:w-[700px]"
            />
          </div>

          <div className="transition-all  bg-red justify-around flex flex-col pt-6  xl:flex-1 xl:pt-0">
            <div className="max-w-4xl">
              <h1 className="transition-all  text-white1  font-bold text-4xl text-center xl:text-6xl xl:text-start">
                Dê o seu palpite na Copa do Mundo do Catar 2022!{" "}
              </h1>
            </div>

            <div className="transition-all  max-w-4xl h-52 flex flex-col justify-around px-6 xl:px-0">
              <button className="transition-all w-full text-red1 rounded-xl bg-white1 font-bold p-4">
                Criar minha conta
              </button>
              <button className="transition-all  w-full border border-white1 text-white1 font-bold rounded-xl p-4">
                Fazer login
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
