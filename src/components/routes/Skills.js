function Skills(props) {
    const skillsItems = props.skillsList.map((skill,index) => {
        return <li>{skill}</li>
    })

    return (
        <>
            <h1>Skills</h1>
            <ul>
                {skillsItems}
            </ul>
        </>
    )
}

export default Skills
