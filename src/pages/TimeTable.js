import FullCalendar from "@fullcalendar/react";
import { useEffect, useRef, useState } from "react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Btn, Container } from "../style";
import newEvents from "../func/NewEvents";
import GetUserColor from "../func/GetUserColor";

const TimeTable = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [prev, setPrev] = useState()
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const employees = [
      {
        title: "윤기",
        start: "2023-11-25T12:00:00",
        end: "2023-11-25T18:00:00",
        id: "1",
        backgroundColor:"",
      },
      {
        title: "지훈",
        start: "2023-11-24T09:00:00",
        end: "2023-11-24T17:00:00",
        id: "2",
        backgroundColor:""
      },
      {
        title: "우리",
        start: "2023-11-25T10:00:00",
        end: "2023-11-25T14:00:00",
        id: "3",
        backgroundColor:""
      },
    ]
    const events = GetUserColor(employees)
    setEvents(events)
  }, [])

  const calendarProps = {
    plugins: [timeGridPlugin, interactionPlugin],
    initialView: "timeGridWeek",
    editable: isEditMode,
    droppable: isEditMode,
    slotMinTime: '07:00:00',
    slotMaxTime: '22:00:00',
    allDaySlot: false,
    eventResizableFromStart: true,
    eventDisplay: 'list-item',
    eventDidMount: function (info) {
      // 이벤트 렌더링 시 텍스트가 잘리지 않도록 스타일 적용
      const titleElement = info.el.querySelector('.fc-title');
      if (titleElement) {
        titleElement.style.whiteSpace = 'normal';
      }
    },
    eventContent: function (info) {
      // 이벤트 렌더링 시 텍스트가 밑으로 줄바꿈되도록 스타일 적용
      return {
        html: `
        <div style= "text-align: center; color: #000;border: none">
        <br/>
        <div class="fc-content" style= "font-size: 1.5em;">${info.event.title}</div>
        <br/>
        <div class="fc-content" style= "font-size: 1.1em;" >${info.event.startStr.slice(11, 16)}
        <br/>
        ~
        <br/>
        ${info.event.endStr.slice(11, 16)}
        </div>
        </div>
        `,
      };
    },
  };

  const handleDrop = (info) => {
    setEvents(newEvents(info, events))
  };

  const handleResize = (info) => {
    setEvents(newEvents(info, events))
  };

  const handleEditBtn = () => {
    setIsEditMode(!isEditMode);
    setPrev(events)
  };

  const handlePostBtn = () => {
    setIsEditMode(!isEditMode);
  }

  const handleCancelEditMode = () => {
    // 취소 버튼을 눌렀을 때 이전 상태로 복원
    setIsEditMode(false);
    setEvents(prev)
  };

  return (
    <Container>
      <FullCalendar
        {...calendarProps}
        events={events}
        eventDrop={handleDrop}
        eventResize={handleResize}
        locale="ko"
      />
      {isEditMode ? (
        <>
          <Btn onClick={handlePostBtn}>확인</Btn>
          <Btn onClick={handleCancelEditMode}>취소</Btn>
        </>
      ) : (
        <>
          <Btn onClick={handleEditBtn}>수정</Btn>
        </>
      )}
    </Container>
  );
};

export default TimeTable;
