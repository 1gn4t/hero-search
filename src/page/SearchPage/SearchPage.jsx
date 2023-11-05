import { useDispatch, useSelector } from "react-redux";
import Content from "../../components/content/Content";
import { BodyContainer, ImgContainer } from "./SearchPage.styled";
import {
  selectCurrHero,
  selectSearch,
} from "../../store/search/seacrh.selectors";
import { useEffect } from "react";
import { setHerosMap } from "../../store/search/search.actions";

export default function SearchPage() {
  const { searchStr } = useSelector(selectSearch);
  const { image, name } = useSelector(selectCurrHero);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchStr) dispatch(setHerosMap(searchStr));
  }, [searchStr, dispatch]);

  return (
    <BodyContainer>
      <ImgContainer src={image.url} alt={name} />
      <Content />
    </BodyContainer>
  );
}
