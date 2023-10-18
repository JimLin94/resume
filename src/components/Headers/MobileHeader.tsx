import Avatar from '@components/Avatar';
import { PROFILE_IMG_LINK } from '@constants/config';
import './style.css';

type Props = {
  onClick: (e: React.MouseEvent) => void;
};

const MobileHeader = ({ onClick }: Props) => (
  <div className="m-header" onClick={onClick}>
    <button className="border-none">
      <span />
      <span />
      <span />
    </button>
    <div className="profile">
      <Avatar link={PROFILE_IMG_LINK} />
      <h2>Jim Lin</h2>
    </div>
  </div>
);

export default MobileHeader;
