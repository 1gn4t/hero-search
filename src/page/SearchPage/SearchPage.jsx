import { useDispatch, useSelector } from "react-redux";
import Content from "../../components/content/Content";
import { BodyContainer, ImgContainer } from "./SearchPage.styled";
import {
  selectCurrHero,
  selectSearch,
} from "../../store/search/seacrh.selectors";
import { useEffect } from "react";
import { PostService } from "../../API/PostService";
import { setHerosMap } from "../../store/search/search.actions";

export default function SearchPage() {
  const { searchStr } = useSelector(selectSearch);
  const { image, name } = useSelector(selectCurrHero);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await PostService.getHero(searchStr);
        if (!response) return;
        dispatch(setHerosMap(response));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [searchStr]);

  return (
    <BodyContainer>
      <ImgContainer src={image.url} alt={name} />
      <Content />
    </BodyContainer>
  );
}
