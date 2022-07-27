import React, { useEffect, useState } from 'react';
import { GetData} from '../../functions/Request.js'
import Card from '../../Components/card/card';

// creating react component called Home 
// which is the actually the first page in being loaded.

/**
 * TODO: Rellenar la información de los cursos en los cards.
 */

function Home(props) {
    const [courses, setCourses] = useState(null);

    useEffect(()=> {
        const getCourses = async () => setCourses(await GetData())
        getCourses();
    }, [])

    return (
        <Card setCourse={props.setCourse} courseIDSetter = {props.courseIDSetter}/>
    )
}

export default Home;
