import Image from "next/image"
import data from "../public/json/projects.json"
import styles from "./accordion.module.scss"

export default function Accordion() {
    const projects = data.map((project,index)=>{
        return(
            <li tabIndex={index} key={index} style={{backgroundImage: `url(${project.img})`}}>
            <div>
              <a href={project.url}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </a>
            </div>
          </li>
        )
    })
    return (
      <div className={styles.accordion}>
        <ul>
        {projects}
        </ul>
      </div>
    );
  }
  