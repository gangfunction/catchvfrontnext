import { ResponsivePie } from '@nivo/pie';
const Piechart = (inspected:any) => {
  const data =[
    {
      "id": "inspected",
      "label": "inspected",
      "value": inspected["inspected"],
      "color": "hsl(26, 70%, 50%)"
    },
    {
      "id": "detected",
      "label": "detected",
      "value": inspected["detected"],
      "color": "hsl(165, 70%, 50%)"
    }
  ]

  return(
    <>


      <ResponsivePie
        data={data}
        margin={{ top: 3, right: 0, bottom: 3, left: 100 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'category10' }}
        borderWidth={5}
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              //@ts-ignore
              '2.5',
            ]
          ]
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabel="id"
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ theme: 'background' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: 'inspected'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'detected'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'go'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'python'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'scala'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'lisp'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'elixir'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'javascript'
            },
            id: 'lines'
          }
        ]}
        motionConfig="wobbly"
        transitionMode="middleAngle"
        legends={[]}
      />

    </>
  )
}

export default Piechart;