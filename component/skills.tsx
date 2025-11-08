import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const SkillsGraph = () => {
  useLayoutEffect(() => {
    const root = am5.Root.new("skillsChart");

    root.setThemes([am5themes_Animated.new(root)]);

    const container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      })
    );

    const series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        singleBranchOnly: false,
        downDepth: 1,
        topDepth: 1,
        maxRadius: 50,
        minRadius: 25,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        centerStrength: 0.4,
        manyBodyStrength: -1,
        nodePadding: 0,
      })
    );
    series.nodes.template.set("tooltipText", "");

    series.links.template.setAll({
      strokeWidth: 2,
      strokeOpacity: 0.5,
    });

    series.circles.template.setAll({
      fillOpacity: 0.9,
      strokeWidth: 2,
      strokeOpacity: 0.3,
    });

    series.circles.template.states.create("hover", {
      scale: 1.2,
      fillOpacity: 1,
    });

    series.outerCircles.template.setAll({
      fillOpacity: 0.9,
      strokeWidth: 2,
      strokeOpacity: 0.3,
    });
    series.outerCircles.template.states.create("hover", {
      scale: 1.2,
      fillOpacity: 1,
    });

    series.data.setAll([
      {
        name: "Skills",
        children: [
          {
            name: "Frontend",
            children: [
              { name: "React" },
              { name: "Next.js" },
              { name: "Angular" },
              { name: "amCharts" },
              { name: "Tailwind CSS" },
              { name: "Bootstrap" },
            ],
          },
          {
            name: "Backend",
            children: [
              { name: "Node.js" },
              { name: "TypeScript" },
              { name: "JavaScript" },
              { name: "Swagger" },
            ],
          },
          {
            name: "Version Control",
            children: [{ name: "Git" }, { name: "GitLab" }],
          },
          {
            name: "AWS",
            children: [{ name: "EC2" }, { name: "S3" }],
          },
          {
            name: "Languages",
            children: [
              { name: "JavaScript" },
              { name: "Python" },
              { name: "C++" },
              { name: "PHP" },
            ],
          },
        ],
      },
    ]);

    series.set("selectedDataItem", series.dataItems[0]);

    return () => {
      root.dispose();
    };
  }, []);
  return (
    <>
      <div
        style={{
          width: "90%",
          height: "90%",
          borderRadius: "1.5rem",
          boxShadow: "0 1px 25px #FBF3D5",
          padding: "0.5rem",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div
          id="skillsChart"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "1rem",
            backgroundColor: "#000",
          }}
        ></div>
      </div>
    </>
  );
};

export default SkillsGraph;
