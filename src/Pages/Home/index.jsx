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

    useEffect(()=> {
        console.log("okay")
        GetData()
            .then((data)=> setCourses(data))
            .catch((err)=> console.log(err))
    }, [])

    

    return (
            <>
            {courses !== null 
            ? (
                <div className='container-home'>
                    {courses.map(course => 
                        <Card 
                            key={course._id} 
                            course={course} 
                            courseIDSetter={props.courseIDSetter}
                        />
                    )}
                </div>
            )
            :(
                <h4>Not Courses were found</h4>
            )}
            </>
    
    )
}

export default Home;
