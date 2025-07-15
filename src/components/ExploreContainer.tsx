import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  return (
    <>
      {name === 'Home' && (
        <div className="container">
          <strong>Welcome to Home</strong>
          <p>Explore the features of Home.</p>
        </div>
      )}
      {name === 'Course' && (
        <div className="container">
          <strong>Welcome to Course</strong>
          <p>Discover the functionalities of Course.</p>
        </div>
      )}
      {name === 'Blog' && (
        <div className="container">
          <strong>Welcome to Blog</strong>
          <p>Learn more about what Blog has to offer.</p>
        </div>
      )}
    </>
  );
}
// <div className="container">
//   <strong>{name}</strong>
//   <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
// </div>


export default ExploreContainer;
