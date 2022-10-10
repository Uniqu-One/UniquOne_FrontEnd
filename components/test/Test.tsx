import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [1, 2, 3, 4, 5];

export default function TEST() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="window">
      <nav>
        <ul>
          {tabs.map((item) => {
            console.log(item);
            return (
              <li key={item}
                className={item === selectedTab ? "selected" : ""}
                onClick={() => setSelectedTab(item)}
              >
                {item === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
