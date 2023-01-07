import classes from './Footer.module.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>Copyright &copy; {`Ripke Enterprises ${currentYear}`}</p>{' '}
    </footer>
  );
};

export default Footer;
