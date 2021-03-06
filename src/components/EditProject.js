import React from 'react'
import { useState } from "react";
import { Grid, Container, TextField } from '@material-ui/core';
import '../AddProject.css'
import MultipleSelect from './MultipleSelectLanguage'
import MiniNavBar from "./MiniNavBar";

function EditProject(props) {

    const { onEdit, projects }  = props

    let projectId = props.match.params.id

    const showPreview = (event) => {
        if(event.target.files.length > 0){
            let src = URL.createObjectURL(event.target.files[0]);
            let preview = document.getElementById("file-ip-prev");
            preview.src = src;;
            preview.style.display = "block";
        }
    }

    if (!projects) {
        <h1>Loading</h1>
    }

    let filteredProjects = projects.filter((e) => {
        return projectId == e._id
    })

    let singleProject = filteredProjects[0]
    

    return (
        <>
        <MiniNavBar />
        <Container className={"center"} style={{ width: "80%" }} fixed >
            <Grid className="centerBlock" container spacing={2}>
                <h1>Update your Project</h1>
                <form onSubmit={(e) => onEdit(e, projectId)}>
                    <div className="centerGrid">
                    <Grid className="imgDisplay" item xs={6}>
                        <div className="centerImg">
                            <img id="file-ip-prev"/>
                        </div>
                        <div className="inputUpload">
                        <label for="file-ip">Upload Image</label>
                        <input onChange={showPreview} name="image" id="file-ip" type="file" accept="image/jpeg, image/png" />
                        </div>
                      
                    </Grid>
                    <Grid className="infoGrid" item xs={6}>
                        <div className="labelLigne">
                        <label for="title">Title</label>
                        <input className="inputAdd"  name="title" id="title" type="text" placeholder="Project title" defaultValue={singleProject.title} />
                        <label for="type">Type</label>
                        <input className="inputAdd" name="type" id="type" type="text" placeholder="Enter type" defaultValue={singleProject.type} />
                        <label for="type">Languages</label>
                        <MultipleSelect className="languages-input" />
                        <label for="description">Description</label>
                        <textarea style={{outlineColor: "#230C0F"}} name="description" id="description" type="text" placeholder="Project description" defaultValue={singleProject.description} />
                        <TextField name="urlProject" id="standard-basic" label="Url project" defaultValue={singleProject.urlProject}/>
                        <TextField  name="urlGit" id="standard-basic" label="Url git" defaultValue={singleProject.urlGit}/>
                        <div className="urlgit-btn-padding">
                        <button type="submit" className="btn-add-project">Save</button>
                        </div>
                        </div>
                    </Grid>
                    </div>
                    
                </form>
            </Grid>
        </Container>
        </>
    )
}

export default EditProject
