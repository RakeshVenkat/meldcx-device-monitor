import React, { useEffect } from 'react';
import { PageContainer, Page, Boundary, Circle, NoOfDevices, Button, Footer } from './styles';
import { notifyTestCompletion } from '../../API';

/** Retreive the angles and coordinates necessary to plot the devices around a circle */
export const fetchCoordinates = (noOfActiveDevices, widthOfContainer = 400) => {
  let radius = widthOfContainer / 2;
  const TOTAL_DEG = 360;
  let eachAngle = TOTAL_DEG / noOfActiveDevices;
  let coordinates = [];
  let anglePerSector = 0;

  for (let i = 0; i < noOfActiveDevices; i++) {
    let top = Math.round((radius - 20) + radius * (Math.cos(-anglePerSector * Math.PI / 180)))
    let left = Math.round((radius - 20) + radius * (Math.sin(-anglePerSector * Math.PI / 180)))
    anglePerSector += eachAngle;
    coordinates.push({ anglePerSector, top, left })
  }
  return coordinates;
}

const DeviceMonitor = ({ noOfActiveDevices, widthOfContainer, logout, getActiveDevices, token }) => {
  if (!noOfActiveDevices) { noOfActiveDevices = 0 }
  if (widthOfContainer > 400 || !widthOfContainer) { widthOfContainer = 400 }
  const coordinates = fetchCoordinates(noOfActiveDevices, widthOfContainer)

  const notify = async () => {
    const name = 'Rakesh Venkat';
    const email = 'rakeshvenkat.au@gmail.com';
    const repoURL = 'https://github.com/RakeshVenkat/DeviceMonitor.git';
    const message = 'The amazing device monitor for MeldCX is now ready :)';

    await notifyTestCompletion(name, email, repoURL, message, token.trim());

  }

  useEffect(() => {
    getActiveDevices()

    const timer = setInterval(async () => {
      getActiveDevices()
    }, 5000)

    return timer => {
      clearInterval(timer)
    }
  }, [])

  return (
    <PageContainer>
      <Page>
        <Boundary width={widthOfContainer}>
          {coordinates.map(eachCoordinate => {
            return (
              <Circle
                key={eachCoordinate.anglePerSector}
                top={eachCoordinate.top}
                left={eachCoordinate.left}
              />)
          })}
          <NoOfDevices width={widthOfContainer}>
            {noOfActiveDevices}
            <div>DEVICES</div><div>ONLINE</div>
          </NoOfDevices>
        </Boundary>
      </Page>
      <Footer>
        <Button href="/" onClick={notify} primary>Notify</Button>
        <Button href="/" onClick={logout}>Log out</Button>
      </Footer>
    </PageContainer>
  );
};


export default DeviceMonitor;