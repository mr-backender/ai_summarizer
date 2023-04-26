import { logo } from "../assets";

const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img className="w-28 object-contain " src={logo} alt="logo" />
                <button
                    className="black_btn"
                    type="button"
                    onClick={() =>
                        window.open(
                            "https://github.com/mr-backender/ai_summator"
                        )
                    }
                >
                    GitHub
                </button>
            </nav>
            <h1 className="head_text">
                Hello,<br className="max-md:hidden" />
                <span className="orange_gradient">I GPT-4</span>
            </h1>
            <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem quam rem, dicta fuga pariatur esse maiores omnis
                quidem delectus velit autem inventore, itaque et, tempore ipsum
                eum sapiente quod at.
            </p>
        </header>
    );
};

export default Hero;
