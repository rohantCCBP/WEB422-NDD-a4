import Navbar from '../components/Navbar';

function About() {
    return (
        <div className="container mx-auto px-4 py-8">
            <Navbar />
            <h1 className="text-2xl mb-6">About Us</h1>
            <p className="mb-4">
                The Fake Store is a leading ecommerce platform showcasing a variety of products. Our mission is to provide customers with the best online shopping experience.
            </p>
            <h2 className="text-xl mb-4">Our Products</h2>
            <p>
                We offer a diverse range of products from clothing to electronics. Each product is carefully curated to ensure it meets our standards of quality and authenticity.
            </p>
        </div>
    );
}

export default About;
