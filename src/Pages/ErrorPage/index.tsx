import { useRouteError } from "react-router-dom";

type ErrorType = {
  statusText: string,
  message: undefined
}

export const ErrorPage = ({ status }: any) => {
  console.log(status)
  const error = useRouteError() as ErrorType;


  return (

    <main id="error-page" className="bg-red-100 flex h-screen items-center justify-center">

      <div className="container text-center space-y-2">

        <h1 className="font-bold text-6xl">Oops!</h1>
        <p className="text-2xl">Desculpe-me algo de errado aconteceu...</p>
        <p className="text-inherit ">
          <i>ERRO CODE: </i>
          <i className="font-bold">{status || error.statusText || error.message}</i>
        </p>

      </div> {/* Fim Container div */}

      {/* Fim da Main */}
    </main>
  )
}