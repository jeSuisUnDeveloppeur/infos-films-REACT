import './Search.css';
import {useNavigate} from 'react-router';


function Search(){
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        const form = e.target;
        const formData = new FormData(form)
        console.log(formData);
        console.log(formData.get('search'));
        navigate(`/List/${formData.get('search')}`)
    }

    return(
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor ='idSearch'>Votre recherche</label>
                    <input id='idSearch' name='search' type='text'/>
                    <button type='submit' className='btnRechercher'>Rechercher</button>
                </fieldset>
                
            </form>
        </div>
    );
}

export default Search;