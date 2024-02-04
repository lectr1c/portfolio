import Portrait from "../assets/23106-100 Large.jpeg";
export const AboutMe = () => {
    return (
        <section className="AboutMeContainer">
            <div className="AboutMeInfo">
                <h1>About Me</h1>
                <p>Suspendisse tincidunt sit amet magna non vulputate. Aliquam sed libero non erat commodo lobortis. Duis venenatis posuere lacus eget tristique. Donec neque felis, malesuada ut sollicitudin sed, varius non elit. Phasellus ultrices augue metus. Mauris est nisi, luctus sed tellus sit amet, ullamcorper dapibus ligula. In consequat lacus at nibh pellentesque congue.  </p>
            </div>
            <div className="AboutMePortrait">
                <img src={Portrait} alt={"My Portrait Photo"}/>
            </div>
        </section>
    );
};