const Tab = (props) => {
  const { currentTab, style, onTabClick, comeFromOnboarding } = props;
  return (
    <li
      className={`${style} mr-4 ${comeFromOnboarding ? "" : "pb-2"}`}
      onClick={() => onTabClick(currentTab)}
    >
      {props.children}
    </li>
  );
};

export default Tab;
