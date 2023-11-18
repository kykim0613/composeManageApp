const newEvents = (info, events) => {
    const start = new Date(new Date(info.event._instance.range.start).getTime() - 60 * 60 * 9 * 1000)
    const end = new Date(new Date(info.event._instance.range.end).getTime() - 60 * 60 * 9 * 1000)
    const id = info.event._def.publicId;
    const newEvents = [...events]
    const object = {
      "title": info.event._def.title,
      "backgroundColor": info.event._def.ui.backgroundColor,
      "id": id,
      "start": start,
      "end": end
    }

    newEvents.splice(id-1, 1, object)

    return newEvents
}

export default newEvents;