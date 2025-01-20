function TalentsLayer() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 bg-gray-100 border">
          <h2 className="text-xl font-bold text-center">Item 1</h2>
          <p className="text-center">Descripción del talento 1.</p>
        </div>
        <div className="p-4 bg-gray-100 border">
          <h2 className="text-xl font-bold text-center">Item 2</h2>
          <p className="text-center">Descripción del talento 2.</p>
        </div>
        <div className="p-4 bg-gray-100 border">
          <h2 className="text-xl font-bold text-center">Item 3</h2>
          <p className="text-center">Descripción del talento 3.</p>
        </div>
      </div>
    </div>
  );
}

export default TalentsLayer;
