import './styles.css';

type Props = {
  children: React.ReactNode;
};

const List = ({ children }: Props) => <ul className="list">{children}</ul>;

export default List;
