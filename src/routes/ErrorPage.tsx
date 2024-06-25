import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return ( 
    <div className="min-h-screen flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <img src="/manutencao.jpg" alt="" />
      <p>
        Opa, esta página ainda não está pronta!
      </p>
      <Button variant="secondary" asChild>
        <Link to="/">
          Voltar para o Início
        </Link>
      </Button>
    </div>
  );
};
 
export default ErrorPage;