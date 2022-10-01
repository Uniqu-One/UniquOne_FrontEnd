
import { useEffect, useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'


const SimpleFixturePage =() =>{
  const [open, setOpen] = useState(false)

  // Ensure it animates in when loaded
  useEffect(() => {
    setOpen(false)
  }, [])

  function onDismiss() {
    setOpen(false)
  }

  return (
    <>

      <div>
        <button onClick={() => setOpen(true)}>Open</button>
        <BottomSheet
          open={open}
          onDismiss={() => setOpen(false)}
        >
          <div>
            <p>
              Using onDismiss lets users close the sheet by swiping
              it down, tapping on the backdrop or by hitting  on
              their keyboard.              Using onDismiss lets users close the sheet by swiping
              it down, tapping on the backdrop or by hitting  on
              their keyboard.              Using onDismiss lets users close the sheet by swiping
              it down, tapping on the backdrop or by hitting  on
              their keyboard.              Using onDismiss lets users close the sheet by swiping
              it down, tapping on the backdrop or by hitting  on
              their keyboard.              Using onDismiss lets users close the sheet by swiping
              it down, tapping on the backdrop or by hitting  on
              their keyboard.              Using onDismiss lets users close the sheet by swiping
              it down, tapping on the backdrop or by hitting  on
              their keyboard.
            </p>
            {/* <div>
              <div className="bg-gray-200 block rounded-md h-10 w-full my-10" />
              <p>
                The height adjustment is done automatically, it just works™!
              </p>
              <div className="bg-gray-200 block rounded-md h-10 w-full my-10" />
            </div> */}
            {/* <button onClick={onDismiss} className="w-full">
              Dismiss
            </button> */}
          </div>
        </BottomSheet>
      </div>
    </>
  )
}

export default SimpleFixturePage