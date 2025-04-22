export default function App() {
    //usuário não vê
    const nome='Evelin'
    const idade= 16
    const cidade='General Sampaio'
    //usuário vê ====================================
    //{} => se chama expressão 
    return (
      <div>
        <p> seu nome: {nome}</p>
        <p>sua idade: {idade}anos</p>
        <p>cidade onde mora: {cidade}</p>
        <p>quanto é 1+1 = {1+1}</p>
      </div>
    )
  
    
  }