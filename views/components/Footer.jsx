const React= require('react');

class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid flex-grow-1 footer pt-5">
                <div className="d-flex flex-column align-items-center">
                    <h2>Site by Curtis Woods</h2>
                    <a className="mb-3" href="https://www.CurtisJWoods.com" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <h3>See my portfolio</h3>
                    </a>
                    <p className="mb-0 font-weight-normal">Music Pattern Vectors by <a className="h5" href="https://www.vecteezy.com/free-vector/music-pattern" 
                        target="_blank" 
                        rel="noopener noreferrer">Vecteezy</a>
                    </p>
                    <p className="font-weight-normal">Header background from <a className="h5" href="https://pixabay.com/photos/piano-oldschool-vintage-music-3717165/"
                        target="_blank"
                        rel="noopener noreferrer">Pixabay</a>.
                    </p>
                </div>

            </div>
        );
    };
};

module.exports = Footer;