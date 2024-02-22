{mode !== 'update'  && (
        <>
          <h3 className="my-10 text-2xl font-bold tracking-tight text-gray-900">Fechas disponibles <span className='text-xs italic'> (Agregar al menos una fecha o rango de fecha)</span></h3>
          <DateRangePicker
            onChange={item => {
              const newRange = {
                startDate: item.selection.startDate,
                endDate: item.selection.endDate,
                key: 'selection',
              };
              setCurrentRange([newRange]); // Asegurarse de actualizar el estado con el nuevo rango
            }}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={currentRange}
            direction="horizontal"
          />
          
          <button className='block rounded-md bg-gray-900 px-1 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700' type="button" onClick={addRange}>Agregar disponibilidad</button>
          <p className="mt-10 text-lg font-bold tracking-tight text-gray-900">Fechas seleccionadas</p>

          {dateRanges.map((range, index) => (
            <div className='flex justify-between border-b-2' key={index}>
              <p className='text-sm flex items-center'> <span className='font-semibold text-black  py-0'> {range.startDate}</span> <span className='px-2'>al</span> <span className='font-semibold text-black'>{range.endDate}</span></p>
              <button className='block rounded-md px-1 py-2 text-center text-sm font-semibold text-red-400 hover:text-red-500 shadow-sm' type="button" onClick={() => removeRange(index)}>Eliminar</button>
            </div>
          ))}
        </>
      )}



      {mode !== 'update'  && (
        <>
          <h3 className="my-10 text-2xl font-bold tracking-tight text-gray-900">Fechas disponibles <span className='text-xs italic'> (Agregar al menos una fecha o rango de fecha)</span></h3>
          <DateRangePicker
            onChange={item => {
              const newRange = {
                startDate: item.selection.startDate,
                endDate: item.selection.endDate,
                key: 'selection',
              };
              setCurrentRange([newRange]); // Asegurarse de actualizar el estado con el nuevo rango
            }}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={currentRange}
            direction="horizontal"
          />
          
          <button className='block rounded-md bg-gray-900 px-1 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700' type="button" onClick={addRange}>Agregar disponibilidad</button>
          <p className="mt-10 text-lg font-bold tracking-tight text-gray-900">Fechas seleccionadas</p>

          {dateRanges.map((range, index) => (
            <div className='flex justify-between border-b-2' key={index}>
              <p className='text-sm flex items-center'> <span className='font-semibold text-black  py-0'> {range.startDate}</span> <span className='px-2'>al</span> <span className='font-semibold text-black'>{range.endDate}</span></p>
              <button className='block rounded-md px-1 py-2 text-center text-sm font-semibold text-red-400 hover:text-red-500 shadow-sm' type="button" onClick={() => removeRange(index)}>Eliminar</button>
            </div>
          ))}
        </>
      )}