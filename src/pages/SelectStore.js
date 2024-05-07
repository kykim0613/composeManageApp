import { useRecoilState, useRecoilValue } from "recoil";
import { editBoxIndex, editState, hovered, store, toggle } from "../Atom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../axiosConfig";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import EditStore from "../components/EditStore";
import EditStoreName from "../components/EditStoreName";
import { fetchGetStoreList } from "../api";

const Container = styled.div`
  max-width: 800px;
  min-width: 600px;
  justify-content: center;
  align-items: center;
  padding: 2em;
  margin: 0 auto;
`;
const StoreAndEdit = styled.div`
  position: relative;
`;
const Store = styled.div`
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border-radius: 25px;
  cursor: pointer;
  background-color: #ddd;
  font-size: 12px;
  color: #333;
  margin: 30px 0;
  position: relative;
  font-weight: bold;
`;

const SelectStore = () => {
  const [selected, setSelected] = useRecoilState(store);
  const [selectedToggle, setSelectedToggle] = useRecoilState(toggle);
  const [state, setState] = useRecoilState(editState);
  const [isHovered, setIsHovered] = useRecoilState(hovered);
  const boxIndex = useRecoilValue(editBoxIndex)
  const [storeArray, setStoreArray] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    fetchGetStoreList().then((result) => {
      setStoreArray(result)
    })
  }, [])

  const handleClickStore = (store) => {
    setSelected(store);
    setSelectedToggle(true);
    nav("/main");
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const newArray = Array.from(storeArray);
    const [reorderStore] = newArray.splice(result.source.index, 1);
    newArray.splice(result.destination.index, 0, reorderStore);

    setStoreArray(newArray);
  };

  return (
    <>
      {state ? <EditStoreName setState={setState} store={storeArray[boxIndex]} setIsHovered={setIsHovered} /> : null}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <Container ref={provided.innerRef} {...provided.droppableProps}>
              {storeArray?.map((store, index) => (
                <Draggable
                  draggableId={`${store.id - 1}`}
                  index={index}
                  key={store.id}
                >
                  {(provided) => (
                    <StoreAndEdit>
                      <Store
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onClick={
                          isHovered ? null : () => handleClickStore(store)
                        }
                      >
                        <EditStore index={index} setIsHovered={setIsHovered} />
                        {store.storeName}
                      </Store>
                    </StoreAndEdit>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default SelectStore;
