import { useParams } from 'react-router-dom';


const SingleBrand = () => {
    const { name } = useParams();
    console.log(name)
    return (
        <div>

        </div>
    );
};

export default SingleBrand;
