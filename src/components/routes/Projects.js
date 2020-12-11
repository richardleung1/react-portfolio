import { Link } from 'react-router-dom'

function Projects(props) {
    const projectItems = props.projectsList.map((project) => {
        return <li><Link to={`/projects/${project.id}`}>{project.name}</Link></li>
    })

    return (
        <>
            <h1>Projects</h1>
            <ul>
                {projectItems}
            </ul>
        </>
    )
}

export default Projects
