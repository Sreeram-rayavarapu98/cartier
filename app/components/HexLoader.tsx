'use client';

export default function HexLoader() {
  return (
    <div className="hex-loader-container">
      <div className="socket">
        <div className="gel center-gel">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        <div className="gel c1 r1">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        <div className="gel c2 r1">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        <div className="gel c3 r1">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        <div className="gel c4 r1">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        <div className="gel c5 r1">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        <div className="gel c6 r1">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        <div className="gel c7 r2">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        <div className="gel c8 r2">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        <div className="gel c9 r2">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        <div className="gel c10 r2">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        <div className="gel c11 r2">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        <div className="gel c12 r2">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        <div className="gel c13 r2">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        <div className="gel c14 r2">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        <div className="gel c15 r2">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        <div className="gel c16 r2">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        <div className="gel c17 r2">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
        <div className="gel c18 r2">
          <div className="hex-brick h1"></div>
          <div className="hex-brick h2"></div>
          <div className="hex-brick h3"></div>
        </div>
      </div>
      
      <style jsx>{`
        .hex-loader-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .socket {
          width: 200px;
          height: 200px;
          position: relative;
          transform: scale(0.6);
        }

        .hex-brick {
          background: #1a1a1a;
          width: 30px;
          height: 17px;
          position: absolute;
          top: 5px;
          animation-name: fade00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
        }

        .h2 {
          transform: rotate(60deg);
        }

        .h3 {
          transform: rotate(-60deg);
        }

        .gel {
          height: 30px;
          width: 30px;
          transition: all .3s;
          position: absolute;
          top: 50%;
          left: 50%;
        }

        .center-gel {
          margin-left: -15px;
          margin-top: -15px;
          animation-name: pulse00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
        }

        .c1 { margin-left: -47px; margin-top: -15px; }
        .c2 { margin-left: -31px; margin-top: -43px; }
        .c3 { margin-left: 1px; margin-top: -43px; }
        .c4 { margin-left: 17px; margin-top: -15px; }
        .c5 { margin-left: -31px; margin-top: 13px; }
        .c6 { margin-left: 1px; margin-top: 13px; }
        .c7 { margin-left: -63px; margin-top: -43px; }
        .c8 { margin-left: 33px; margin-top: -43px; }
        .c9 { margin-left: -15px; margin-top: 41px; }
        .c10 { margin-left: -63px; margin-top: 13px; }
        .c11 { margin-left: 33px; margin-top: 13px; }
        .c12 { margin-left: -15px; margin-top: -71px; }
        .c13 { margin-left: -47px; margin-top: -71px; }
        .c14 { margin-left: 17px; margin-top: -71px; }
        .c15 { margin-left: -47px; margin-top: 41px; }
        .c16 { margin-left: 17px; margin-top: 41px; }
        .c17 { margin-left: -79px; margin-top: -15px; }
        .c18 { margin-left: 49px; margin-top: -15px; }

        .r1 {
          animation-name: pulse00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-delay: .2s;
        }

        .r2 {
          animation-name: pulse00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-delay: .4s;
        }

        .r1 > .hex-brick {
          animation-name: fade00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-delay: .2s;
        }

        .r2 > .hex-brick {
          animation-name: fade00;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-delay: .4s;
        }

        @keyframes pulse00 {
          0% { transform: scale(1); }
          50% { transform: scale(0.01); }
          100% { transform: scale(1); }
        }

        @keyframes fade00 {
          0% { background: #353535; }
          50% { background: #1a1a1a; }
          100% { background: #454545; }
        }
      `}</style>
    </div>
  );
}

