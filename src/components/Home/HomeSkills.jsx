import React from 'react'
import {
    BsGithub,
    BsPatchCheckFill,
} from 'react-icons/bs'
import {
    SiCss3,
    SiNextdotjs,
    SiBootstrap,
    SiPython,
    SiDjango,
    SiFigma,
    SiHtml5,
    SiJavascript,
    SiGithub,
    SiReact,
    SiVuedotjs,
    SiMysql,
    SiMongodb,
    SiTypescript,
    SiTailwindcss,
    SiRedux,
    SiReactquery,
    SiGraphql,
    SiPostgresql,
    SiDocker
} from "react-icons/si";
import "./skillsContainerStyle.css"
const HomeSkills = () => {

    return (
        <div className="All-Skills skillsContainer">
            <div className="my-exp">
                <div className="experience-Allskills">
                    <div id='animate_frontend_skills' className="experience__frontend">
                        <h3>Frontend Development</h3>
                        <div className="experience__content">
                            <article className='experience__details'>
                                <SiHtml5 className='experience__details-icon' />
                                <div>
                                    <h4>HTML</h4>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <SiCss3 className='experience__details-icon' />
                                <div>
                                    <h4>CSS</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <SiJavascript className='experience__details-icon' />
                                <div>
                                    <h4>JavaScript</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <SiTypescript className='experience__details-icon' />
                                <div>
                                    <h4>TypeScript</h4>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <SiTailwindcss className='experience__details-icon' />
                                <div>
                                    <h4>Tailwind</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <SiGithub className='experience__details-icon' />
                                <div>
                                    <h4>Git / Github</h4>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <SiReact className='experience__details-icon' />
                                <div>
                                    <h4>React</h4>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <SiRedux className='experience__details-icon' />
                                <div>
                                    <h4>Redux</h4>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <SiReactquery className='experience__details-icon' />
                                <div>
                                    <h4>ReactQuery</h4>
                                </div>
                            </article>
                            {/* <article className='experience__details'>
                                <SiFigma className='experience__details-icon' />
                                <div>
                                    <h4>Figma</h4>
                                </div>
                            </article> */}
                        </div>
                    </div>
                </div>
            </div>
            <div  className="homeSkills">
                <h3 id="HOME-SKILLS" >SKILLS</h3>
                <div className="homeCubeSkills">
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_91H3OVet4ezeSGW3p9S8GBCCBv4cCrzOI4hhCtNtzX6ynbypGxB6C2SwS7cC3gj7elA&usqp=CAU"
                            alt="Face1" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                        <img src="https://krify.co/wp-content/uploads/2019/06/ReactJS.jpg"
                            alt="Face2" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                        <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*i2fRBk3GsYLeUk_Rh7AzHw.png"
                            alt="Face3" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                        <img src="https://global.discourse-cdn.com/sitepoint/original/3X/b/5/b59a78e2ed76c705f3c0dcb300f3f222aefdcd99.png"
                            alt="Face4" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                        <img src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fusv4n4x9y62l1k8r18h6.png"
                            alt="Face5" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                        <img src="https://teky.edu.vn/blog/wp-content/uploads/2021/08/Cach-su-dung-Mongodb-nhu-the-nao.jpg"
                            alt="Face6" />
                    </div>
                </div>
                <div className="cubeShadow"></div>
            </div>
            <div className="my-exp">
                <div className="experience-Allskills">
                    <div id='animate_backend_skills' className="experience__backend">
                        <h3>Backend Development</h3>
                        <div className="experience__content">
                            <article className='experience__details'>
                                <SiNextdotjs className='experience__details-icon' />
                                <div>
                                    <h4>Node JS</h4>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <SiPostgresql className='experience__details-icon' />
                                <div>
                                    <h4>PostgresQl</h4>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <SiGraphql className='experience__details-icon' />
                                <div>
                                    <h4>GraphQL</h4>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <SiTypescript className='experience__details-icon' />
                                <div>
                                    <h4>TypeScript</h4>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <SiMongodb className='experience__details-icon' />
                                <div>
                                    <h4>MongoDb</h4>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>ExpressJs</h4>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsGithub className='experience__details-icon' />
                                <div>
                                    <h4>Git / Github</h4>
                                </div>
                            </article>
                            <article className='experience__details'>
                                <SiDocker className='experience__details-icon' />
                                <div>
                                    <h4>Docker</h4>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSkills
