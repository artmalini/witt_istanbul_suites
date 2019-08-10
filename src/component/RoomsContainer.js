import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);


/*import React from 'react';
import { RoomConsumer } from "../context";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "./Loading";

export default function RoomsContainer() {
	return (
		<RoomConsumer>
		{value => {
			const { loading, setRoom, sortedRooms,rooms } = value;

			if(loading) {
				return <Loading />;
			}
			
			return (
				<>				
		      	<RoomsFilter rooms={rooms} />
		      	<RoomsList rooms={sortedRooms} setRoom={setRoom} />
		    	</>
			);
		}}
		</RoomConsumer>
	)
}*/