import PostModel from "../../components/PostModel";
import styles from "./AboutMe.module.css"
import fotoCapa from "assets/sobre_mim_capa.png"
const AboutMe = () => {
    return (
        <PostModel fotoCapa={fotoCapa}
                    titulo="About Me">
            <h3 className={styles.subtitulo}>
                Hi! My name is Dimitrius and this is a Static Page Application (SPA) I've built to study React!
            </h3>

            <img src='https://github.com/dimitriusborges.png'
                 alt="Profile"
                 className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
            Master in Computer Science and Technology, Graduated in Computer Engineering.
            </p>
            <p className={styles.paragrafo}>
            Currently working on internal Atlassian projects through the partnership with e-core, aiming to accelerate VIP Customer migration to the cloud.
            </p>
            <p className={styles.paragrafo}>
            Worked on the Wplex Software crew rostering optimization solution, Wplex-EP,
            migrating its monolithic architecture, written in Java and JSF, to a microservices-based architecture
            </p>
            <p className={styles.paragrafo}>
            Worked on an IoT, Multi-Process Embedded C/Rust and Embedded Linux project for vehicle tracking on Wplex Software, developing both embedded and backend applications.
            </p>
            <p className={styles.paragrafo}>
            During my stay at SEMA-SEG, I worked on several embedded systems, all destined to Traffic Light Control, going from extension modules, to add new features on a traffic light control, to multi-platform systems, that uses Android, SoCs, RF communication, and GPRS connection to expand the whole traffic light system.
            </p>
            <p className={styles.paragrafo}>
            I was the main SEMA-SEG company's representative during a project developed in a partnership with Instituto Federal de Formiga - IF. In this position, I was responsible to guarantee that the project was aligned with the company's expectations and necessities, conflict resolution between both parts (Research Staff and Company), and elaborating reports.
            </p>
            <p className={styles.paragrafo}>
            Developed, on my master's degree, an Intelligent Agent aiming to control a signalized intersection using Hierarchical Reinforcement Learning, and compared its results with a common Traffic Light Control, where my proposed solution is 20% to 30% more efficient than the common system.
            </p>
        </PostModel>
    )
}


export default AboutMe