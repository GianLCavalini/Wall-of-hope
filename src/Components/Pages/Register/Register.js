import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react"

export function Register(){
    const navigate = useNavigate();
    const [register, setRegister] = useState({
        instituição: "",
        descrição: "",
        precisamos: "",
        oferecemos: "",
        endereço: "",
});





    function handleChange(e){
        setRegister({...register, [e.target.name]: e.target.value});
        console.log(register)

    }

    async function handleSubmit(e){
        e.preventDefault();

       await axios.post("https://ironrest.herokuapp.com/helpinther", register)

        navigate("/");
    }

    return(

<form onSubmit={handleSubmit}>
        <div> 

            <h1>Registre-se aqui:</h1>
            
            <input
                name="instituição" 
                type="text" 
                placeholder="Instituição"
                onChange={handleChange}
                value={register.instituição}
            />


            <input
                name="descrição"  
                type="text"
                placeholder="Descrição" 
                onChange={handleChange}
                value={register.descrição}
            />

            <input 
                name="precisamos" 
                type="text"
                placeholder="Precisamos de:" 
                onChange={handleChange}
                value={register.precisamos}
            />

            <input 
                name="oferecemos" 
                type="text" 
                placeholder="Oferecemos:"
                onChange={handleChange}
                value={register.oferecemos}
            />

            <input
                name="endereço" 
                type="text"
                placeholder="Endereço" 
                onChange={handleChange}
                value={register.endereço}
            />
            
            <button type="submit" >Registrar</button>

        </div>
    </form>
    )
}